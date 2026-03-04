// JavaScript source code

document.addEventListener('DOMContentLoaded', () => {
    // ѕолучаем все элементы li, у которых есть вложенный ul
    const treeItems = document.querySelectorAll('.tree li');

    treeItems.forEach(li => {
        const childUl = li.querySelector('ul');

        if (childUl) {
            // —крываем вложенный список (на случай, если class open не добавлен)
            childUl.classList.remove('open');
            // ƒобавл€ем класс cursor pointer дл€ li с детьми
            li.style.cursor = 'pointer';

            li.addEventListener('click', (e) => {
                // ѕредотвращаем всплытие, чтобы клик по дочернему не закрывал родителей
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
            // ≈сли у li нет детей, курсор обычный
            li.style.cursor = 'default';
            li.style.userSelect = 'text';
        }
    });
});