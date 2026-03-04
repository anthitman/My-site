document.addEventListener('DOMContentLoaded', () => {
    // Ïîëó÷àåì âñå ýëåìåíòû li, ó êîòîðûõ åñòü âëîæåííûé ul
    const treeItems = document.querySelectorAll('.tree li');

    treeItems.forEach(li => {
        const childUl = li.querySelector('ul');

        if (childUl) {
            // Ñêðûâàåì âëîæåííûé ñïèñîê (íà ñëó÷àé, åñëè class open íå äîáàâëåí)
            childUl.classList.remove('open');
            // Äîáàâëÿåì êëàññ cursor pointer äëÿ li ñ äåòüìè
            li.style.cursor = 'pointer';

            li.addEventListener('click', (e) => {
                // Ïðåäîòâðàùàåì âñïëûòèå, ÷òîáû êëèê ïî äî÷åðíåìó íå çàêðûâàë ðîäèòåëåé
                e.stopPropagation();

                const isOpen = childUl.classList.contains('open');
                if (isOpen) {
                    childUl.classList.remove('open');
                    li.classList.remove('expanded');
                } else {
                    childUl.classList.add('open');
                    li.classList.add('expanded');
                }
            });
        } else {
            // Åñëè ó li íåò äåòåé, êóðñîð îáû÷íûé
            li.style.cursor = 'default';
            li.style.userSelect = 'text';
        }
    });

});
