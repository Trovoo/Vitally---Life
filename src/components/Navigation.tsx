import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import LogoVitally from "@/assets/Logo/LogoVitally.png";

const products = [
  { title: "START I MODERN", href: "/produtos/start-i-modern" },
  { title: "START II", href: "/produtos/start-ii" },
  { title: "START III MODERN", href: "/produtos/start-iii-modern" },
  { title: "START IV", href: "/produtos/start-iv" },
  { title: "START V", href: "/produtos/start-v" },
  { title: "CROSSING LIMITS", href: "/produtos/crossing-limits" },
  { title: "PESO LIVRE", href: "/produtos/peso-livre" },
  { title: "CARDIO", href: "/produtos/cardio" },
  { title: "IMPORTS", href: "/produtos/imports" },
  { title: "ACESSÓRIOS", href: "/produtos/acessorios" },
  { title: "BASQUETE", href: "/produtos/basquete" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e?: React.MouseEvent) => {
    // Se já está na home, evita navegação e apenas rola para o topo suavemente
    if (window.location.pathname === "/") {
      e?.preventDefault();
      scrollToTopSmooth();
      setIsMobileMenuOpen(false);
      return;
    }
    // Se não está na home, navega e rola para o topo após a troca de rota
    navigate("/");
    setTimeout(scrollToTopSmooth, 100);
    setIsMobileMenuOpen(false);
  };

  const handleSectionClick = (id: string, e?: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e?.preventDefault();
      scrollToSection(id);
      setIsMobileMenuOpen(false);
      return;
    }
    navigate("/");
    setTimeout(() => scrollToSection(id), 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "border-b border-border" : "border-b-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-[10px]" onClick={handleHomeClick}>
            <img
              className="h-10 w-auto object-contain"
              src={LogoVitally}
              alt="Logo Vitally"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full h-7.5 font-normal text-muted-foreground bg-transparent hover:bg-accent"
                    )}
                  >
                    <Link to="/" onClick={handleHomeClick}>HOME</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full h-7.5 font-normal text-muted-foreground bg-transparent hover:bg-accent"
                    )}
                  >
                    <Link to="/" onClick={(e) => handleSectionClick("about-section", e)}>
                      O QUE É A VITALLY
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full h-7.5 font-normal text-muted-foreground bg-transparent hover:bg-accent"
                    )}
                  >
                    <Link to="/" onClick={(e) => handleSectionClick("why-invest-section", e)}>
                      POR QUE INVESTIR NA VITALLY?
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full h-7.5 font-normal text-muted-foreground bg-transparent hover:bg-accent"
                    )}
                  >
                    <Link to="/" onClick={(e) => handleSectionClick("basketball-section", e)}>
                      O NOSSO DIFERENCIAL
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full h-7.5 font-normal text-muted-foreground bg-transparent hover:bg-accent"
                    )}
                  >
                    PRODUTOS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background">
                    <ul className="grid w-[400px] gap-1 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                      {products.map((product) => (
                        <li key={product.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={product.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {product.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("contact-form"), 100);
              }}
            >
              CONTATO
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                HOME
              </Link>

              <Link
                to="/"
                onClick={(e) => handleSectionClick("about-section", e)}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                O QUE É A VITALLY
              </Link>

              <Link
                to="/"
                onClick={(e) => handleSectionClick("why-invest-section", e)}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                POR QUE INVESTIR NA VITALLY?
              </Link>

              <Link
                to="/"
                onClick={(e) => handleSectionClick("basketball-section", e)}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                O NOSSO DIFERENCIAL
              </Link>

              <div className="px-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">
                  PRODUTOS
                </p>
                <div className="flex flex-col gap-2 ml-2">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      to={product.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-foreground/80 hover:text-foreground"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => scrollToSection("contact-form"), 100);
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4"
              >
                CONTATO
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
