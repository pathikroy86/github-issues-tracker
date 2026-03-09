const handleActiveBtn = (id) => {
    const allBtn = document.querySelectorAll('.btn');
    for (const btn of allBtn) {
        btn.classList.remove('btn-success');
    }
    const activeBtn = document.getElementById(id);
    activeBtn.classList.add('btn-success');
}