export default {
    state: {
        news: [{
                id: 1,
                title: "Está aberta a nova janela de transferências",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto nam eligendi tempore eius ipsum ratione laborum laboriosam amet hic! Maxime pariatur laboriosam unde. Earum deserunt libero aperiam quae architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium non ea consequuntur magni eligendi perferendis laudantium facere, eos possimus voluptatum rerum eveniet consectetur excepturi qui nihil ab at beatae!",
                date: "2021-01-01",
                img: "news1.jpg",
                imgInfo: "Notícia 1"
            },
            {
                id: 2,
                title: "Treinamento ocorre a noite",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto nam eligendi tempore eius ipsum ratione laborum laboriosam amet hic! Maxime pariatur laboriosam unde. Earum deserunt libero aperiam quae architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium non ea consequuntur magni eligendi perferendis laudantium facere, eos possimus voluptatum rerum eveniet consectetur excepturi qui nihil ab at beatae!",
                date: "2021-01-07",
                img: "news2.jpg",
                imgInfo: "Notícia 2"
            },
            {
                id: 3,
                title: "Inauguração do novo estádio",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto nam eligendi tempore eius ipsum ratione laborum laboriosam amet hic! Maxime pariatur laboriosam unde. Earum deserunt libero aperiam quae architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium non ea consequuntur magni eligendi perferendis laudantium facere, eos possimus voluptatum rerum eveniet consectetur excepturi qui nihil ab at beatae!",
                date: "2021-01-17",
                img: "news3.jpg",
                imgInfo: "Notícia 3"
            }
        ]
    },
    getters: {
        getNews(state){
            return state.news;
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            });
            return notice
        }
    },
}