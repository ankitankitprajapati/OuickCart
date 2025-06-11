import user from "@/models/User";
import { Inngest } from "inngest";
import { connect } from "mongoose";  

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

export const syncUserCreation=inngest.createFunction(
    {
        id:'sync-User-from-clork'
    },
    { event: 'clerk/user created'},
      async({event}) => {
        const {id, first_name, last_name, email_adresses, image_url } = event.data
        const usreData={

            _id:id,
             email: email_adresses[0].email_adresses,
             name: first_name+ ' '+last_name,
             imageUrl: image_url
        }
        await connectDB()
        await user.creata(usreData)
      }
)

//Inngert function to updata user data in data loese

export const syncUserUpdation=inngest.createFunction(

    {
        id:'updata-user-from-clerk'
    },
    {
        event:'clerk/user.updata'
    },
        async ({event}) =>{
             const {id, first_name, last_name, email_adresses, image_url } = event.data
        const usreData={

            _id:id,
             email: email_adresses[0].email_adresses,
             name: first_name+ ' '+last_name,
             imageUrl: image_url
        }
        await connectDB()
        await User,findByIdAndUpdata(id,usreData)
   }    
)

//inngest function to delete user from database

export const syncUserDeletion = inngest.createFunction(
    {
        id:'delete-user-whit-clerk'
    },
    {
        event:'clerk/user.deleted'
    },
    async({event})=>{
        const {id}=event.data

        await connectDB()
        await User.findByIdAndUpdata(id)
    }
)