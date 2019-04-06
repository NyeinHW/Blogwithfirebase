import {retrieveData, storeData} from "../utilities/localStorage";
import firestore from '../utilities/firebase';
export const fetchArticles = () => dispatch=>{
    const articles = []
    const articlesData=firestore.collection('articles').get();
    articlesData.then((snapshot)=>{
        snapshot.docs.forEach(item =>articles.push( item.data()));
        console.log("articles",articles);
        dispatch({
            type: "FETCH_ARTICLES",
            payload: articles
        });
    })
   
};
export const insertArticles=(article)=>dispatch=>{
    article.id=8;
    firestore.collection('articles').add(article);
   // const articles=retrieveData('articles');
//     const mapped_array=articles.map(i=>parseInt(i.id));
// const max_id=Math.max(...mapped_array);
// console.log(mapped_array,max_id,article.id);
// article.id=max_id+1;
// article.id=articles.length+1;
// articles.push(article);
// console.log('stored article',articles,article);
// storeData('articles',articles);

    dispatch({
        type: "ADD_NEW_ARTICLES",
     article: article
    })
}
export const deleteArticle=(id,cb)=>dispatch =>{
    const articles = []
    const articlesData=firestore.collection('articles').get();
    articlesData.then((snapshot)=>{
        snapshot.docs.forEach(item =>articles.push( item.data()));
        console.log("articles",articles);
    //const articles=retrieveData('articles');
    const newArticles=articles.filter(item=>item.id != id);
    console.log("new is",newArticles);
    //storeData('articles',newArticles);
   // articles.(newArticles);
    console.log("new articles is", articles);
    console.log("New articles is ",newArticles);
    dispatch({
        type: 'DELETE_ARTICLES',
        id:id
    });
    cb();
})}