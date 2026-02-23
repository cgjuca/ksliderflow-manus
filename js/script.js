<<<<<<< HEAD
// ========================================
// KS Líder Flow - JavaScript Otimizado
// ========================================

/**
 * Função para rolar suavemente até uma seção
 * @param {string} sectionId - ID da seção
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Atualizar botão ativo na navegação
        updateActiveNavButton(sectionId);
        // Fechar menu mobile se estiver aberto
        closeMobileMenu();
    }
}

/**
 * Atualizar botão ativo na navegação
 * @param {string} sectionId - ID da seção
 */
function updateActiveNavButton(sectionId) {
    // Remover classe active de todos os botões
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adicionar classe active ao botão correspondente
    const activeButton = Array.from(navButtons).find(btn => {
        return btn.textContent.toLowerCase().includes(
            document.getElementById(sectionId)?.querySelector('h1, h2')?.textContent?.toLowerCase() || ''
        );
    });
    
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/**
 * Toggle do menu mobile
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

/**
 * Fechar menu mobile
 */
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

/**
 * Toggle FAQ
 * @param {HTMLElement} element - Elemento clicado
 */
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    if (answer) {
        if (answer.style.display === 'none' || !answer.style.display) {
            answer.style.display = 'block';
            element.setAttribute('aria-expanded', 'true');
        } else {
            answer.style.display = 'none';
            element.setAttribute('aria-expanded', 'false');
        }
    }
}

/**
 * Detectar seção ativa ao fazer scroll
 */
function detectActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    let currentSection = '';
=======
// Navigation scroll and active button
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        updateActiveButton(sectionId);
    }
}

function updateActiveButton(sectionId) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[onclick="scrollToSection('${sectionId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Update active button on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
>>>>>>> 1e53f68482c94ec58d4992eb709bbffa14a73543
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
<<<<<<< HEAD
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Atualizar botão ativo
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (currentSection) {
        const activeButton = Array.from(navButtons).find(btn => {
            const sectionId = currentSection;
            const sectionName = document.getElementById(sectionId)?.querySelector('h1, h2')?.textContent?.toLowerCase() || '';
            return btn.textContent.toLowerCase().includes(sectionName) || 
                   btn.textContent.toLowerCase() === 'início' && sectionId === 'hero';
        });
        
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
}

/**
 * Validação de formulário
 */
function validateForm(form) {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    
    let isValid = true;
    
    // Validar nome
    if (!name || !name.value.trim()) {
        showError(name, 'Por favor, insira seu nome');
        isValid = false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value)) {
        showError(email, 'Por favor, insira um email válido');
        isValid = false;
    }
    
    // Validar mensagem
    if (!message || !message.value.trim()) {
        showError(message, 'Por favor, insira uma mensagem');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Mostrar erro em campo
 * @param {HTMLElement} field - Campo do formulário
 * @param {string} message - Mensagem de erro
 */
function showError(field, message) {
    if (!field) return;
    
    // Remover erro anterior se existir
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Adicionar borda vermelha
    field.style.borderColor = '#e74c3c';
    
    // Criar e adicionar mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '5px';
    field.parentElement.appendChild(errorDiv);
}

/**
 * Limpar erros do formulário
 * @param {HTMLElement} form - Formulário
 */
function clearFormErrors(form) {
    const inputs = form.querySelectorAll('input, textarea');
    const errors = form.querySelectorAll('.error-message');
    
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
    
    errors.forEach(error => {
        error.remove();
    });
}

/**
 * Inicializar evento de scroll
 */
function initScrollListener() {
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            detectActiveSection();
        }, 100);
    }, { passive: true });
}

/**
 * Inicializar eventos do formulário
 */
function initFormEvents() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Validar formulário antes de enviar
            if (!validateForm(this)) {
                e.preventDefault();
                return false;
            }
            
            // Limpar erros se houver
            clearFormErrors(this);
        });
        
        // Limpar erro ao focar no campo
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '';
                const error = this.parentElement.querySelector('.error-message');
                if (error) {
                    error.remove();
                }
            });
        });
    }
}

/**
 * Inicializar eventos do menu mobile
 */
function initMobileMenuEvents() {
    const hamburger = document.querySelector('.hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
        hamburger.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                toggleMobileMenu();
            }
        });
    }
}

/**
 * Inicializar eventos de navegação
 */
function initNavEvents() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (sectionId) {
                updateActiveNavButton(sectionId);
            }
        });
    });
}

/**
 * Lazy loading de imagens
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Inicializar todos os eventos
 */
function initializeApp() {
    // Detectar seção ativa ao carregar
    detectActiveSection();
    
    // Inicializar listeners
    initScrollListener();
    initFormEvents();
    initMobileMenuEvents();
    initNavEvents();
    initLazyLoading();
    
    // Log de inicialização
    console.log('KS Líder Flow - App inicializado com sucesso');
}

/**
 * Executar quando o DOM estiver pronto
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

/**
 * Performance: Usar requestAnimationFrame para smooth scrolling
 */
window.addEventListener('scroll', () => {
    // Qualquer lógica de scroll pode ir aqui
}, { passive: true });

/**
 * Acessibilidade: Suporte a navegação por teclado
 */
document.addEventListener('keydown', (e) => {
    // Atalho: Pressionar 'C' para ir ao contato
    if (e.key === 'c' || e.key === 'C') {
        if (e.ctrlKey || e.metaKey) {
            // Não interferir com Ctrl+C
            return;
        }
        // Opcional: scrollToSection('contact');
    }
});

// Exportar funções para uso global
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFAQ = toggleFAQ;
window.validateForm = validateForm;
=======
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    if (current) {
        updateActiveButton(current);
    }
});

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;
    
    // Prepare email body
    const emailBody = `
Nome: ${name}
Email: ${email}
Telefone: ${phone}
Empresa: ${company}

Mensagem:
${message}
    `.trim();
    
    // Send email via mailto (you can replace this with an API call)
    const mailtoLink = `mailto:contato@liderflow.com.br?subject=Novo Contato - ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Alternative: Send via API (uncomment and configure)
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         name,
    //         email,
    //         phone,
    //         company,
    //         message
    //     })
    // }).then(response => {
    //     if (response.ok) {
    //         alert('Mensagem enviada com sucesso!');
    //         document.querySelector('form').reset();
    //     }
    // });
    
    // Show success message
    alert('Obrigado pelo contato! Sua mensagem será enviada para contato@liderflow.com.br');
    
    // Reset form
    document.querySelector('form').reset();
}

// Hamburger menu toggle
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(event.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active button
    updateActiveButton('hero');
});
>>>>>>> 1e53f68482c94ec58d4992eb709bbffa14a73543
