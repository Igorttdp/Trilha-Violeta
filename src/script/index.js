class Switch {
    static virtualTour() {
        const btn = document.querySelector('.find-us__btn');
        btn.onclick = () => {
            const map = document.querySelector('#find-us__map');
            const tour = document.querySelector('#find-us__tour');

            map.classList.toggle('hidden');
            tour.classList.toggle('hidden');
            btn.classList.toggle('active');

            if(btn.classList.contains('active')) {
                btn.innerText = 'Voltar para o mapa'
            } else {
                btn.innerText = 'Fazer Tour Vitual'
            }
        }
    }
}

Switch.virtualTour()