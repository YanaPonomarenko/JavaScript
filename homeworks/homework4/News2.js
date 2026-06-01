class NewsFeed {
    constructor() {
        this.news = [];
    }
    
    get count() {
        return this.news.length;
    }
    
    addNews(title, text, tags, publicationDate) {
        this.news.push({
            title: title,
            text: text,
            tags: tags,
            publicationDate: publicationDate
        });
    }
    
    removeNews(index) {
        if (index >= 0 && index < this.news.length) {
            this.news.splice(index, 1);
        }
    }
    
    displayAll() {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        
        if (this.news.length === 0) {
            outputDiv.innerHTML = '<p>Немає новин</p>';
            return;
        }
        
        this.news.forEach(newsItem => {
            const formattedDate = this.getFormattedDate(newsItem.publicationDate);
            const tagsString = newsItem.tags.map(tag => `#${tag}`).join(' ');
            
            outputDiv.innerHTML += `
                <h2>${newsItem.title}</h2>
                <h3>${formattedDate}</h3>
                <p>${newsItem.text}</p>
                <p>${tagsString}</p>
                <hr>
            `;
        });
    }
    
    sortByDate() {
        this.news.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
    }
    
    searchByTag(tag) {
        return this.news.filter(newsItem => 
            newsItem.tags.some(t => t.toLowerCase() === tag.toLowerCase())
        );
    }
    
    getFormattedDate() {
    const now = new Date();
    const pubDate = new Date(this.publicationDate);
    const timeDiff = now.getTime() - pubDate.getTime();
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    if (diffDays < 1) return "сьогодні";
    if (diffDays < 7) return `${diffDays} днів тому`;
    
    return `${pubDate.getDate()}.${pubDate.getMonth()+1}.${pubDate.getFullYear()}`;
}
}

const newsFeed = new NewsFeed();

newsFeed.addNews("What is Lorem Ipsum?", "Lorem Ipsum is simply dummy text...", ["lorem", "text"], "2026-05-30");
newsFeed.addNews("JavaScript News", "JavaScript is awesome!", ["javascript", "web"], "2026-06-01");
newsFeed.addNews("Old News", "Very old news", ["old", "archive"], "2025-01-15");

console.log("Кількість новин:", newsFeed.count);
newsFeed.displayAll();

console.log("Після сортування:");
newsFeed.sortByDate();
newsFeed.displayAll();

console.log("Пошук за тегом 'javascript':");
const found = newsFeed.searchByTag("javascript");
console.log(found);