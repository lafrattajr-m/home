/**
 * =============================================
 * MELHORIA DE EFEITOS HOVER PARA BOTÕES
 * - Efeito de brilho mais intenso
 * - Transição suave
 * - Cores mais vibrantes no hover
 * =============================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // Configurações avançadas dos botões
    const buttonEffects = {
        site: {
            normal: '#FFFFFF',
            hover: 'linear-gradient(135deg, #FFFFFF 0%, #F5B918 100%)', // Gradiente branco-dourado
            shadow: '0 0 15px rgba(245, 185, 24, 0.7)' // Sombra luminosa
        },
        instagram: {
            normal: '#E1306C',
            hover: 'linear-gradient(135deg, #E1306C 0%, #FF8C66 100%)', // Gradiente rosa-laranja
            shadow: '0 0 15px rgba(225, 48, 108, 0.7)'
        },
        whatsapp: {
            normal: '#25D366',
            hover: 'linear-gradient(135deg, #25D366 0%, #5AFF8C 100%)', // Gradiente verde-claro
            shadow: '0 0 15px rgba(37, 211, 102, 0.7)'
        }
    };

    // Aplicar efeitos a todos os botões
    const applyHoverEffects = () => {
        // Botões "Navegar no site"
        document.querySelectorAll('.btn-site').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = buttonEffects.site.hover;
                btn.style.boxShadow = buttonEffects.site.shadow;
                btn.style.transform = 'translateY(-3px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.background = buttonEffects.site.normal;
                btn.style.boxShadow = 'none';
                btn.style.transform = 'translateY(0)';
            });
        });

        // Botões Instagram
        document.querySelectorAll('.btn-instagram').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = buttonEffects.instagram.hover;
                btn.style.boxShadow = buttonEffects.instagram.shadow;
                btn.style.transform = 'translateY(-3px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.background = buttonEffects.instagram.normal;
                btn.style.boxShadow = 'none';
                btn.style.transform = 'translateY(0)';
            });
        });

        // Botões WhatsApp
        document.querySelectorAll('.btn-whatsapp').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = buttonEffects.whatsapp.hover;
                btn.style.boxShadow = buttonEffects.whatsapp.shadow;
                btn.style.transform = 'translateY(-3px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.background = buttonEffects.whatsapp.normal;
                btn.style.boxShadow = 'none';
                btn.style.transform = 'translateY(0)';
            });
        });
    };

    // Inicializar efeitos
    applyHoverEffects();

    // Efeito de clique adicional
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'translateY(1px)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'translateY(-3px)';
        });
    });
});