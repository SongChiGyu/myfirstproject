function openmenu() {
    document.querySelector("#dropcontent").style.display = "block";
    }

    const button = document.querySelector('#dropdownbtn');
   
    button.addEventListener('blur', () => {
        const dropdown = document.querySelector('#dropcontent');
        
        // 0.2초 뒤에 실행
        setTimeout(() => {
            dropdown.style.display = '';
        }, 200);
    });