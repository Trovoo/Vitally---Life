import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSwipeProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  slidesPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export const CarouselSwipe: React.FC<CarouselSwipeProps> = ({
  children,
  className,
  itemClassName,
  showIndicators = true,
  showArrows = true,
  autoplay = false,
  autoplayInterval = 5000,
  slidesPerView = { mobile: 1, tablet: 2, desktop: 3 }
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(slidesPerView.mobile);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  // Atualizar itemsPerView baseado no tamanho da tela
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(slidesPerView.desktop);
      } else if (width >= 768) {
        setItemsPerView(slidesPerView.tablet);
      } else {
        setItemsPerView(slidesPerView.mobile);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [slidesPerView]);

  // Configurar autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => 
          prev >= children.length - itemsPerView ? 0 : prev + 1
        );
      }, autoplayInterval);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, autoplayInterval, children.length, itemsPerView]);

  const maxIndex = Math.max(0, children.length - itemsPerView);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - translateX);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = startX - currentX;
    setTranslateX(-diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const itemWidth = carouselRef.current?.firstElementChild?.clientWidth || 0;
    const threshold = itemWidth * 0.2; // 20% do item
    
    if (Math.abs(translateX) > threshold) {
      if (translateX < 0 && currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      } else if (translateX > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - translateX);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setTranslateX(-diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Container do carrossel */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% + ${translateX}px))`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={cn(
                "flex-shrink-0",
                `w-full md:w-1/${slidesPerView.tablet} lg:w-1/${slidesPerView.desktop}`,
                itemClassName
              )}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Setas de navegação */}
      {showArrows && maxIndex > 0 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "hidden md:flex items-center justify-center"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "hidden md:flex items-center justify-center"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicadores de slide */}
      {showIndicators && maxIndex > 0 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      )}

      {/* Indicador de arraste para mobile */}
      {maxIndex > 0 && (
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-muted-foreground">
            ← Arraste para navegar →
          </p>
        </div>
      )}
    </div>
  );
};