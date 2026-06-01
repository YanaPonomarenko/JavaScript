class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = publicationDate;
    }
    
    print() {
    const outputDiv = document.getElementById('output');
    
    const formattedDate = this.getFormattedDate();
    const tagsString = this.tags.map(tag => `#${tag}`).join(' ');
    
    outputDiv.innerHTML += `
        <h2>${this.title}</h2>
        <h3>${formattedDate}</h3>
        <p>${this.text}</p>
        <p>${tagsString}</p>
        <hr>
    `;
}
    getFormattedDate() {
        const now = new Date();
        const pubDate = new Date(this.publicationDate);
        const diffTime = Math.abs(now - pubDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 1) {
            return "сьогодні";
        } else if (diffDays < 7) {
            return `${diffDays} днів тому`;
        } else {
            const day = pubDate.getDate();
            const month = pubDate.getMonth() + 1;
            const year = pubDate.getFullYear();
            return `${day}.${month}.${year}`;
        }
    }
}

const news1 = new News(
    "What is Lorem Ipsum?",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ["lorem", "ipsum", "text"],
    "2026-05-30"
);

news1.print();