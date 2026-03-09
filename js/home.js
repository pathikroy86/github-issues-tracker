
const loadData = () => {
    const spinnerContainer = document.getElementById('spinner');
    spinnerContainer.classList.remove('hidden');
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(data => {
            displayData(data.data)
            spinnerContainer.classList.add('hidden');
        })
}

const displayData = (issues) => {
    const cardContainer = document.getElementById('card-container');
    const openCardContainer = document.getElementById('open-card-container');
    const issueCounter = document.getElementById('issue-counter');
    issueCounter.innerText = `${issues.length}`;
    for (const issue of issues) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="border-t-2 ${issue.status === "open" ? `border-success` : `border-violet-700`} rounded-2xl p-4 shadow-xl">
            <div class="flex justify-between mb-2">
                <div>
                ${issue.status === "open" ? `<i class="fa-solid fa-arrows-spin text-[#00A96E] bg-[#CBFADB] p-1 rounded-full"></i>` : `<i class="fa-regular fa-circle-check text-[#A855F7] bg-[#F0E2FF] p-1 rounded-full"></i>`}    
                </div>
                <div class="${issue.priority === "high" ? `bg-[#FEECEC] text-[#EF4444]` : issue.priority === "medium" ? `bg-[#FFF6D1] text-[#F59E0B]` : `bg-[#EEEFF2] text-[#9CA3AF]`}
                px-5 rounded-full">${issue.priority}</div>
            </div>
            <h4 class="text-sm font-semibold">${issue.title}</h4>
            <p class="text-[#64748B] text-xs">${issue.description}</p>
            <div class="flex flex-col gap-2 my-2">
                <div class="${issue.labels[0] === "bug" ? `bg-[#FEECEC]` : issue.labels[0] === "enhancement" ? `bg-[#DEFCE8]` : `bg-blue-100`} py-1 px-3 rounded-full flex gap-2 items-center flex-wrap">
                ${issue.labels[0] === "bug" ? `<i class="fa-solid fa-bug text-[#EF4444]"></i><span
                        class="text-error text-xs">${issue.labels[0]}</span>` : issue.labels[0] === "enhancement" ? `<i class="fa-solid fa-ticket text-[#00A96E]"></i><span
                        class="text-[#00A96E] text-xs">${issue.labels[0]}</span>` : `<i class="fa-regular fa-book-medical text-info"></i><span
                        class="text-info text-xs">${issue.labels[0]}</span>`}
                </div>
                <div class="bg-[#FFF8D8] py-1 px-3 rounded-full flex gap-2 ${issue.labels[1] ? `` : `invisible`}"><i class="fa-solid fa-circle-radiation text-[#D97706]"></i>
                    <span class="text-[#D97706] text-xs">
                        ${issue.labels[1]}</span>
                </div>
            </div>
            <hr>
            <p class="text-[#64748B] text-xs mt-3">Written by: ${issue.author}</p>
            <p class="text-[#64748B] text-xs mt-2">${issue.createdAt.substring(0, 10)}</p>
        </div>
        `;
        cardContainer.append(newDiv);
    }
}
loadData();
document.getElementById('all-btn').addEventListener('click', function () {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ``;
    loadData();
})

document.getElementById('open-btn').addEventListener('click', function () {
    const spinnerContainer = document.getElementById('spinner');
    spinnerContainer.classList.remove('hidden');
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(data => {
            const issues = data.data;
            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML = ``;
            const openIssues = issues.filter(issue => issue.status === "open")
            displayData(openIssues);
            spinnerContainer.classList.add('hidden');
        })
})

document.getElementById('closed-btn').addEventListener('click', function () {
    const spinnerContainer = document.getElementById('spinner');
    spinnerContainer.classList.remove('hidden');
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(data => {
            const issues = data.data;
            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML = ``;
            const closedIssues = issues.filter(issue => issue.status === "closed")
            displayData(closedIssues);
            spinnerContainer.classList.add('hidden');
        })
})