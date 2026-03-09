const priorityValidation = (data, id) => {
    const container = document.getElementById(id);
    if (data === "high") {
        container.classList.add('bg-[#FEECEC]', 'text-[#EF4444]');
    }
    else if (data === "medium") {
        container.classList.add('bg-[#FFF6D1]', 'text-[#F59E0B]');
    }
    else {
        container.classList.add('bg-[#EEEFF2]', 'text-[#9CA3AF]')
    }
}