const boxes = document.querySelectorAll('.box');
        const containers = document.querySelectorAll('.half-screen');

        boxes.forEach(box => {
            box.addEventListener('dragstart', dragStart);
        });

        containers.forEach(container => {
            container.addEventListener('dragover', dragOver);
            container.addEventListener('drop', drop);
        });

        function dragStart(e) {
//object,hold data that dragged .method of | para formate and data
            e.dataTransfer.setData('text/plain', e.target.id);
           
        }

        function dragOver(e) {
// allow drop to occur. Without this,drop event won't fire.
            e.preventDefault();
        
        }

        function drop(e) {
            e.preventDefault();
//object. It retrieves set data.
            const id = e.dataTransfer.getData('text');
            const draggableElement = document.getElementById(id);
            const dropzone = e.target;

            if (dropzone.classList.contains('half-screen')) {
                dropzone.appendChild(draggableElement);
            } else if (dropzone.classList.contains('box')) {
// Appends draggable element to parent of dropzone if  dropzone has class box
                dropzone.parentElement.appendChild(draggableElement);
            }
        }