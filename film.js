

const PaginaFilm={
    template:'<div>Pagina</div>'
}


const routes = [
    {path: '/', component: PaginaFilm }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })



const app = Vue.createApp({
    el:"#app",
    data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            page:1,
            movies:[],
            best:[]
            
            

        }
    },
    methods:{

            getpost() 
            {  
                return fetch('https://api.themoviedb.org/3/tv/popular?api_key='+this.api_key+'&language='+this.language+'&page='+this.page)
                    .then(res =>res.json())  
                    .then(post=>{
                        console.log(post)
                        this.movies=post.results
                    })

            },
            image_path(poster_path) {
                  return 'https://image.tmdb.org/t/p/original'+poster_path

        },
        async newGP(){
            this.page=this.page+1;
            const ris=await fetch('https://api.themoviedb.org/3/tv/popular?api_key=' + this.api_key + '&language=' + this.language + '&page=' + this.page)
            const post = await ris.json()
            console.log(post)
            this.best=post.results
            for(let i=0;i<20;i++){
                this.movies.push(this.best[i])
            }
            
            },
           
        },
        
    
    created(){
        this.getpost()
        
    },
    
    
    
})


app.use(router)
app.mount('#app')