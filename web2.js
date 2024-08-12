// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content for the "Projects" section
const projects = [
    {
        title: "Zomato Dataset Analysis Using Python",
        description: "Conducted in-depth exploratory data analysis on the Zomato dataset using Python libraries (Pandas, NumPy, Matplotlib). Uncovered patterns and trends through statistical techniques and advanced visualizations, providing data-driven insights. Developed actionable business solutions to optimize decision-making and support strategic planning."
    },
    {
        title: "SQL Project- Audio Streaming App",
        description: "Utilized PostgreSQL to analyze customer spending patterns, top-performing cities, and popular music genres, driving strategic marketing recommendations. Developed complex SQL queries to rank artists and generate insights for targeted promotions. Contributed to strategic planning by identifying high-value customers and optimizing artist engagement."
    },
    {
        title: "Advanced Excel Data Visualization",
        description: "Successfully executed data analysis for an online shopping store using advanced Excel for data cleaning, processing, and visualization. Generated strategic insights and actionable recommendations to boost revenue and operational efficiency. Developed interactive Excel dashboards to track key performance metrics, supporting informed decision-making."
    }
];

function loadProjects() {
    const projectContainer = document.querySelector('#projects .grid');
    projectContainer.innerHTML = '';

    projects.forEach(project => {
        const projectDiv = document.createElement('a');
        projectDiv.classList.add('custom-project-card', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg');
        projectDiv.href = '#'; // You can add URLs here if needed

        const projectTitle = document.createElement('h4');
        projectTitle.classList.add('text-xl', 'font-bold', 'mb-2');
        projectTitle.textContent = project.title;

        const projectDesc = document.createElement('p');
        projectDesc.classList.add('text-gray-700');
        projectDesc.textContent = project.description;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDesc);

        projectContainer.appendChild(projectDiv);
    });
}

// Load projects when the page loads
document.addEventListener('DOMContentLoaded', loadProjects);
