import { genreArray } from '@/data/genre'
import { useRouter } from 'next/router'
import { BsSearch, BsPeople, BsPerson, BsInstagram, BsFacebook } from "react-icons/bs"
import Slideshow from '@/components/Slideshow'
import Card from '@/components/Card'

import Dracula  from '../svg-assets/dracula-svgrepo-com.svg'
import Love from '../svg-assets/valentines-valentines-day-svgrepo-com.svg'
import Anime from '../svg-assets/anime-and-manga-svgrepo-com.svg'
import Detetive from '../svg-assets/detective-face-svgrepo-com.svg' 
import Action from '../svg-assets/criminal-heist-svgrepo-com.svg'

function returnSVG(id){
    switch(id){
      case 'horror': return (<Dracula className="svg" height={25} width={25} />); break;
      case 'romcom': return (<Love className="svg" height={25} width={25}  />); break;
      case 'mystery': return (<Detetive className="svg" height={25} width={25} />); break;
      case 'anime': return (<Anime className="svg" height={25} width={25} />); break;
      case 'action': return (<Action className="svg" height={25} width={25} />); break;
  
    }
  }

const HomepageDesktop = () => {
    const posterArray = [
        {
          id:"your-name",
          poster:"/your-name-vertical-poster.jpg",
          name:"Your Name (Kimi no Na wa)",
          rating: 8.4
        },
        {
          id: "dark-knight-rises",
          poster:"/dark-knight-rises.jpg",
          name:"Batman: The Dark Knight Rises",
          rating: 8.4
        },
        {
          id: 'into-the-spiderverse',
          poster:"/spiderman-verical-spiderverse.jpg",
          name:"Spiderman: Into the Spiderverse",
          rating: 8.4
        },
        {
          id:"inception",
          poster:"/inception-vertical-poster.jpeg",
          name:"Inception",
          rating: 8.8
        },
        {
          id: 'into-the-spiderverse-1',
          poster:"/spiderman-verical-spiderverse.jpg",
          name:"Spiderman: Into the Spiderverse",
          rating: 8.4
        },
        {
            id:"your-name-1",
            poster:"/your-name-vertical-poster.jpg",
            name:"Your Name (Kimi no Na wa)",
            rating: 8.4
          },
      ]
      const router  = useRouter()
return ( 
    <div className='parent-homepage  h-[100vh] w-[100%] grid-row-1 text-[#686262] bg-[#252525] '>
  {/* Sidebar */}
        <div className="sidebar bg-[#111111] col-span-1 flex flex-col text-lg h-[100%] min-w-[40%] overflow-hidden">
        <div className="logo flex flex-col h-[20%] w-[100%] bg-transparent justify-center items-center p-10">
            <img src="/cinevault-hd-logo-green.png" alt="logo-for-website" className="logo-image h-[125px] w-[200px]" />
        </div>
        <div className="socials flex flex-row mt-[2%] justify-center">
        <a href='https://www.facebook.com/petrichor.iitpkd' target={"_blank"} className='mr-[7%] hover:text-[#8685ef] transition-colors duration-300 cursor-pointer'>
            <BsFacebook  />
        </a>
        <a href="https://instagram.com/petrichor.iitpkd?igshid=MDM4ZDc5MmU=" target={"_blank"} className='hover:text-[#8685ef] transition-colors duration-300 cursor-pointer'>
            <BsInstagram />
        </a>
        </div>
        <div className="title-genre mt-[30%] h-[5%] w-[100%] pl-5 flex items-center  animate glow delay-1">
        <h1>Genre-Categories</h1>
        </div>
        <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center">
        {
            genreArray.map((genre) => (
            <div className="genre-category animate glow delay-2 pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer" key={genre.id}
                onClick = {()=>{router.push(genre.link)}}
            >
                {returnSVG(genre.id)}
                {genre.message}
            </div>
            ))
        }
        </div>
        <br /><br />
        <div className="title-genre h-[5%] w-[100%] pl-5 flex items-center animate glow">
            <h1>Social</h1>
        </div>
        <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center animate glow delay-2">
            <div className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer"  onClick = {()=>{router.push("/errorPage")}}>
                <BsPerson />
                Friends
            </div>
            <div className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer" onClick = {()=>{router.push("/errorPage")}}>
                <BsPeople />
                Party
            </div>
        </div>
    </div>
{/* Main Content */}
    <div className="main-content h-full bg-[#252525] col-start-2 col-span-4 overflow-y-scroll scrollbar">
        <div className="top-bar justify-center items-center h-[7%] w-[100%]">
            <div className="search-bar bg-[#393939] w-[75%] h-[80%] ml-[7%] pl-5 rounded-3xl" >
                <BsSearch />
                <input type="text" className=' outline-none bg-transparent text-gray-400 h-[100%]' placeholder='Search for movies' />
            </div>
            <div className="username bg-[#393939] w-[75%] h-[80%] ml-10 rounded-3xl flex-wrap">
                <img src="/cinevault-logo-img.png" alt="profile-pic" className="profile-pic h-[75%] w-[75%] bg-[#252525] object-scale-down rounded-full justify-self-center" />
                <div className="user-profile-name text-white">A Free Demo User</div>
            </div>
        </div>

        <h1 className="title text-white pl-[5%] mt-[3%] text-lg font-bold">Featured Movies</h1>
        <div className="slide-show flex justify-center items-center h-[40%] w-[100%] animate glow delay-2">
            <Slideshow />
        </div>
        <br></br>
        <div className="popular-movies  flex flex-col h-[60%] w-[100%]">
            <h1 className="title pl-[5%] text-white text-lg font-bold">Most Popular Movies</h1>
            <br></br>
            <div className="cards h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 overflow-x-scroll scrollbar">
                {
                posterArray.map((poster)=>(
                    <Card name={poster.name} rating={poster.rating} img={poster.poster} key={poster.id} />
                ))
                }
            </div>
        </div>
    </div>
   </div>
    );
}
 
export default HomepageDesktop;