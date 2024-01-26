import sampel_img_1 from '../assests/images/thumbnail-project-1-large.png'
import sampel_img_2 from '../assests/images/comx.png'
import sampel_img_3 from '../assests/images/uacs.png'
import sampel_img_4 from '../assests/images/sdash.png'
import sampel_img_5 from '../assests/images/kamel.png'


const projects = [
   
    {
        title:'Kamel Storefront',
        image:sampel_img_5,
        stacks:['html', 'css', 'javascript','react', "next" ],
        link: "https://emmyshoes.kenga.africa/"
    },
    {
        title:'ComX',
        image:sampel_img_2,
        stacks:['html', 'css'],
        link:"https://chisomokeoma-ats20.netlify.app/"
    },
    {
        title:'Unified Access Control System',
        image:sampel_img_3,
        stacks:['html', 'css', 'javascript', "typescript","react"],
        link:"https://uacs-afex.netlify.app"
    },
    {
        title:'SDash',
        image:sampel_img_4,
        stacks:['html', 'css', 'javascript','typescript',"react","next", "internationalization"  ],
        link: "https://sdash-five.vercel.app"
    },
   {
        title:'Todo Web App',
      
        image:sampel_img_1,
        stacks:['html', 'css', "javascript"],
        link:"https://our-todo.netlify.app/"
    },
   
]



export {
    projects,
}