function solve() {
    let btnSearch = document.getElementById('searchBtn');
    let fldSearch = document.getElementById('searchField');
    let tblRows = Array.from(document.querySelectorAll('#exercise tbody tr'));
    btnSearch.addEventListener('click', fnSearch);
    function fnSearch() {
        tblRows.forEach((row) => {
            row.className = '';
            let regEx = new RegExp(`${fldSearch.value}`);
            if (regEx.test(row.textContent)) {
                row.className = 'select';
            }
        });
        fldSearch.value = '';
    }
}