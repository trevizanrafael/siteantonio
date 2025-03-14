import { gsap } from 'gsap';

// Inicialização quando o DOM é carregado
document.addEventListener('DOMContentLoaded', function() {
    // Animação dos cards de parâmetros
    initCardAnimations();
    
    // Configuração do gráfico de radar
    createQualityChart();
    
    // Funcionalidade do botão "Ver mais"
    setupShowMoreButton();
    
    // Animações visuais dos métodos
    animateMethodVisuals();
});

// Função para inicializar animações dos cards
function initCardAnimations() {
    const cards = document.querySelectorAll('.parameter-card');
    
    gsap.from(cards, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.parameters-container',
            start: "top 80%"
        }
    });
    
    // Adicionar efeito de hover nos cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.icon'), {
                duration: 0.3,
                rotation: 5,
                scale: 1.1,
                ease: "power1.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.icon'), {
                duration: 0.3,
                rotation: 0,
                scale: 1,
                ease: "power1.out"
            });
        });
    });
}

// Função para criar o gráfico de radar para visualização dos dados
function createQualityChart() {
    const ctx = document.getElementById('qualityChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Umidade', 'Atividade de Água', 'pH e Acidez', 'Textura', 'Volume', 'Cor', 'Sensorial', 'Composição'],
            datasets: [{
                label: 'Importância dos Parâmetros',
                data: [95, 90, 85, 100, 80, 85, 95, 75],
                backgroundColor: 'rgba(212, 167, 106, 0.2)',
                borderColor: 'rgba(212, 167, 106, 1)',
                pointBackgroundColor: 'rgba(212, 167, 106, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(139, 94, 52, 0.2)'
                    },
                    grid: {
                        color: 'rgba(139, 94, 52, 0.2)'
                    },
                    pointLabels: {
                        font: {
                            family: 'Poppins',
                            size: 12
                        },
                        color: '#8b5e34'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Poppins',
                            size: 14
                        },
                        color: '#8b5e34'
                    }
                }
            }
        }
    });
}

// Função para configurar o botão "Ver mais"
function setupShowMoreButton() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenParameters = document.querySelector('.hidden-parameters');
    
    showMoreBtn.addEventListener('click', function() {
        if (hiddenParameters.style.display === 'grid') {
            gsap.to(hiddenParameters, {
                duration: 0.5,
                opacity: 0,
                height: 0,
                onComplete: () => {
                    hiddenParameters.style.display = 'none';
                    showMoreBtn.textContent = 'Ver mais parâmetros';
                }
            });
        } else {
            hiddenParameters.style.display = 'grid';
            gsap.from(hiddenParameters, {
                duration: 0.5,
                opacity: 0,
                height: 0,
                onComplete: () => {
                    showMoreBtn.textContent = 'Ver menos parâmetros';
                    
                    // Animar os cards adicionais
                    const additionalCards = hiddenParameters.querySelectorAll('.parameter-card');
                    gsap.from(additionalCards, {
                        duration: 0.8,
                        opacity: 0,
                        y: 50,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                }
            });
        }
    });
}

// Função para animar as visualizações dos métodos
function animateMethodVisuals() {
    // Animação do forno (umidade)
    gsap.to('.bread-sample', {
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    
    // Animação do medidor de pH
    gsap.to('.meter-display', {
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    
    // Animação da colorimetria
    gsap.to('.lens', {
        opacity: 0.7,
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    
    // Animação da análise sensorial
    gsap.to('.scale-point', {
        backgroundColor: '#d4a76a',
        stagger: 0.2,
        duration: 0.5,
        repeat: -1,
        repeatDelay: 2,
        ease: "power1.inOut"
    });
    
    // Animações para métodos adicionais
    gsap.to('.bubbles', {
        y: -10,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    
    gsap.to('.colonies', {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
}
