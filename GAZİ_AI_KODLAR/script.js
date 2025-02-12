// Gelecekte eklenecek interaktif özellikler için JavaScript dosyası
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa yüklendi');
    

    //const chatbotWelcome = document.querySelector('.chatbot-welcome');
    const chatPopup = document.querySelector('.chat-popup');
    const closeBtn = document.querySelector('#closeChat');
    const chatMessages = document.querySelector('#chatMessages');
    const chatInput = document.querySelector('.chat-input input');
   
    const capabilityItems = document.querySelectorAll('.capabilities-list li');
    
     function sendMessageToAI(message) {
        fetch('https://api.example.com/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({ query: message })
        })
        .then(response => response.json())
        .then(data => {
            const aiResponse = data.response; 
            addMessageToChat('bot', aiResponse);
        })
        .catch(error => {
            console.error('Error:', error);
            addMessageToChat('bot', 'Üzgünüm, bir hata oluştu.');
        });
    }

    // Arama fonksiyonalitesi
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // Burada arama fonksiyonunu gerçekleştirin
            console.log('Aranan terim:', searchTerm);
            
            // Örnek arama fonksiyonu
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.backgroundColor = '#fff3cd';
                    setTimeout(() => {
                        item.style.backgroundColor = '';
                    }, 2000);
                }
            });
        }
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

  

    // Kapatma butonuna tıklandığında tanıtım sayfasını kapat
    document.querySelector('.close-intro-btn').addEventListener('click', function() {
        document.querySelector('.chatbot-intro-page').style.display = 'none';
    });

    // Sayfa dışına tıklandığında tanıtım sayfasını kapat
    document.querySelector('.chatbot-intro-page').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });


    const yurtIslemleri = document.getElementById('yurtIslemleri');
    const accordionContent = document.querySelector('.accordion-content');

    yurtIslemleri.addEventListener('click', function(e) {
        e.preventDefault();
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!yurtIslemleri.contains(e.target) && !accordionContent.contains(e.target)) {
            accordionContent.style.display = 'none';
        }
    });

    const gencizLink = document.getElementById('genciz');
    const loginModal = document.getElementById('loginModal');
   

    gencizLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
    });


    const entryScreen = document.getElementById('entryScreen');
    
    function closeEntryScreen() {
        entryScreen.style.display = 'none';
        window.location.href = 'index.html'; // Sayfayı yeniden yükler
    }

   

    const projectsButtons = document.querySelector('.projects-buttons');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    leftBtn.addEventListener('click', function() {
        projectsButtons.scrollBy({
            left: -100,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', function() {
        projectsButtons.scrollBy({
            left: 100,
            behavior: 'smooth'
        });
    });

    const discoverBtn = document.querySelector('.discover-btn');
    const yapabileceklerimPage = document.querySelector('.yapabileceklerim-page');

    discoverBtn.addEventListener('click', function() {
        yapabileceklerimPage.style.display = 'block';
    });


    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

}); 