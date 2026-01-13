import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth logic here
    console.log('Auth submitted:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-background border border-border rounded-md overflow-hidden">
              {/* Header */}
              <div className="relative p-8 pb-6 text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute right-4 top-4 text-foreground hover:text-accent"
                >
                  <X className="w-5 h-5" />
                </Button>
                
                <div className="w-16 h-16 mx-auto mb-4 rounded-md bg-primary flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h2 className="font-display text-3xl font-bold text-foreground">
                  {isLogin ? 'Bienvenido de Nuevo' : 'Únete a los Creadores'}
                </h2>
                <p className="text-muted-foreground mt-2">
                  {isLogin ? 'Inicia sesión en tu colección divina' : 'Crea tu cuenta para comenzar a coleccionar'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 pb-8">
                <div className="space-y-4">
                  {!isLogin && (
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Nombre Completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-styled pl-12 py-6 rounded-md"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Correo Electrónico"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-styled pl-12 py-6 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Contraseña"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input-styled pl-12 pr-12 py-6 rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="text-right mt-3">
                    <a href="#" className="text-sm text-primary hover:text-accent transition-colors">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full btn-primary text-primary-foreground py-6 text-lg font-semibold rounded-md mt-6"
                >
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </Button>

                <div className="mt-6 text-center">
                  <span className="text-muted-foreground">
                    {isLogin ? "¿No tienes una cuenta? " : '¿Ya tienes una cuenta? '}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary hover:text-accent font-medium transition-colors"
                  >
                    {isLogin ? 'Regístrate' : 'Iniciar Sesión'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
