// Language translations
const translations = {
  'pt-br': {
    // Meta tags
    'meta-title': 'Paybank | O banco pra chamar de seu.',
    'meta-description': 'Paybank | O banco pra chamar de seu.',
    
    // Navbar
    'nav-pj': 'Conta Digital PJ',
    'nav-about': 'Quem Somos',
    'nav-features': 'Features',
    'nav-app': 'Nosso App',
    'nav-open-account': 'Abra sua conta digital',
    'nav-language': 'EN',
    
    // Hero section
    'hero-tag': 'uma nova era',
    'hero-title-1': 'O banco',
    'hero-title-2': 'pra chamar de',
    'hero-title-3': 'seu',
    'hero-description': 'Venha para a poupança digital do futuro, venha para a Paybank. O seu banco digital, o seu dinheiro digital, o futuro é aqui!',
    'hero-cta': 'Junte-se a nós',
    
    // Control section
    'control-tag': 'controle total',
    'control-title': 'Todo o controle financeiro em um só lugar',
    'control-description': 'Veja como você pode cuidar das suas finanças pelo app Paybank de forma segura, rápida e o melhor, no corforto da sua casa.',
    
    // App section
    'app-tag': 'resolva tudo pelo app',
    'app-title': 'Resolva tudo pelo app',
    'app-description': 'Tenha o controle de suas finanças na palma da sua mão. Faça transferências, pagamentos e muito mais pelo app Paybank.',
    'app-feature-1': 'Transferências',
    'app-feature-2': 'Pagamentos',
    'app-feature-3': 'Investimentos',
    'app-feature-4': 'Cartões',
    
    // Future section
    'future-tag': 'o futuro',
    'future-title': 'Seu dinheiro, seu futuro',
    'future-description': 'Invista seu dinheiro com segurança e tranquilidade. Conheça nossas opções de investimentos e comece a investir hoje mesmo.',
    
    // Investment section
    'investment-tag': 'investimentos',
    'investment-title': 'Invista seu dinheiro com segurança',
    'investment-description': 'Conheça nossas opções de investimentos e comece a investir hoje mesmo.',
    'investment-cta': 'Comece a investir',
    'investment-calculator-title': 'Calculadora de investimentos',
    'investment-calculator-description': 'Simule seus investimentos e veja quanto você pode ganhar.',
    'investment-calculator-amount': 'Valor inicial',
    'investment-calculator-time': 'Tempo (meses)',
    'investment-calculator-result': 'Resultado',
    
    // Footer
    'footer-newsletter': 'Seja o primeiro a receber notícias sobre nossos serviços bancários',
    'footer-email-placeholder': 'Digite aqui o seu e-mail',
    'footer-connected': 'Fique conectado com a gente em qualquer lugar!',
    'footer-rights': 'Todos os direitos reservados',
    'footer-contact': 'Contato',
    'footer-about': 'Sobre',
    'footer-terms': 'Termos de uso',
    'footer-privacy': 'Política de privacidade'
  },
  'en-us': {
    // Meta tags
    'meta-title': 'Paybank | The bank to call your own.',
    'meta-description': 'Paybank | The bank to call your own.',
    
    // Navbar
    'nav-pj': 'Business Digital Account',
    'nav-about': 'About Us',
    'nav-features': 'Features',
    'nav-app': 'Our App',
    'nav-open-account': 'Open your digital account',
    'nav-language': 'PT',
    
    // Hero section
    'hero-tag': ' a new era ',
    'hero-title-1': 'The bank',
    'hero-title-2': 'to call',
    'hero-title-3': 'yours',
    'hero-description': 'Come to the digital savings of the future, come to Paybank. Your digital bank, your digital money, the future is here!',
    'hero-cta': 'Join us',
    
    // Control section
    'control-tag': 'total control',
    'control-title': 'All financial control in one place',
    'control-description': 'See how you can take care of your finances through the Paybank app safely, quickly and best of all, in the comfort of your home.',
    
    // App section
    'app-tag': 'solve everything through the app',
    'app-title': 'Solve everything through the app',
    'app-description': 'Have control of your finances in the palm of your hand. Make transfers, payments and much more through the Paybank app.',
    'app-feature-1': 'Transfers',
    'app-feature-2': 'Payments',
    'app-feature-3': 'Investments',
    'app-feature-4': 'Cards',
    
    // Future section
    'future-tag': 'the future',
    'future-title': 'Your money, your future',
    'future-description': 'Invest your money safely and with peace of mind. Learn about our investment options and start investing today.',
    
    // Investment section
    'investment-tag': 'investments',
    'investment-title': 'Invest your money safely',
    'investment-description': 'Learn about our investment options and start investing today.',
    'investment-cta': 'Start investing',
    'investment-calculator-title': 'Investment calculator',
    'investment-calculator-description': 'Simulate your investments and see how much you can earn.',
    'investment-calculator-amount': 'Initial amount',
    'investment-calculator-time': 'Time (months)',
    'investment-calculator-result': 'Result',
    
    // Footer
    'footer-newsletter': 'Be the first to receive news about our banking services',
    'footer-email-placeholder': 'Enter your email here',
    'footer-connected': 'Stay connected with anyone, anywhere',
    'footer-rights': 'All rights reserved',
    'footer-contact': 'Contact',
    'footer-about': 'About',
    'footer-terms': 'Terms of use',
    'footer-privacy': 'Privacy policy'
  }
};

// Default language
let currentLanguage = 'pt-br';

// Function to change the language
function changeLanguage() {
  // Toggle between languages
  currentLanguage = currentLanguage === 'pt-br' ? 'en-us' : 'pt-br';
  
  // Update the toggle button text
  document.querySelector('.language-toggle').textContent = translations[currentLanguage]['nav-language'];
  
  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
  
  // Update meta tags
  document.title = translations[currentLanguage]['meta-title'];
  document.querySelector('meta[name="title"]').setAttribute('content', translations[currentLanguage]['meta-title']);
  document.querySelector('meta[name="description"]').setAttribute('content', translations[currentLanguage]['meta-description']);
  document.querySelector('meta[property="og:title"]').setAttribute('content', translations[currentLanguage]['meta-title']);
  document.querySelector('meta[property="og:description"]').setAttribute('content', translations[currentLanguage]['meta-description']);
  document.querySelector('meta[property="twitter:title"]').setAttribute('content', translations[currentLanguage]['meta-title']);
  document.querySelector('meta[property="twitter:description"]').setAttribute('content', translations[currentLanguage]['meta-description']);
  
  // Store the language preference in localStorage
  localStorage.setItem('paybank-language', currentLanguage);
}

// Initialize language based on localStorage or browser language
document.addEventListener('DOMContentLoaded', () => {
  // Check if there's a stored language preference
  const storedLanguage = localStorage.getItem('paybank-language');
  if (storedLanguage) {
    currentLanguage = storedLanguage;
  } else {
    // Check browser language
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.includes('en')) {
      currentLanguage = 'en-us';
    }
  }
  
  // Set initial language
  document.querySelector('.language-toggle').textContent = translations[currentLanguage]['nav-language'];
  
  // Apply initial translations
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update placeholders
  
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
  
  // Update meta tags
  document.title = translations[currentLanguage]['meta-title'];
  document.querySelector('meta[name="title"]').setAttribute('content', translations[currentLanguage]['meta-title']);
  document.querySelector('meta[name="description"]').setAttribute('content', translations[currentLanguage]['meta-description']);
  document.querySelector('meta[property="og:title"]').setAttribute('content', translations[currentLanguage]['meta-title']);
  document.querySelector('meta[property="og:description"]').setAttribute('content', translations[currentLanguage]['meta-description']);
  document.querySelector('meta[property="twitter:title"]').setAttribute('content', translations[currentLanguage]['meta-title']);
  document.querySelector('meta[property="twitter:description"]').setAttribute('content', translations[currentLanguage]['meta-description']);
});
