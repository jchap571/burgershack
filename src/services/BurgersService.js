
import { dbContext } from "../db/DbContext";

class BurgersService {
    async createBurger(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }
    async getBurgers(){
        const burgers = await dbContext.Burgers.find()
        return burgers
    }


    async deleteBurger(burgerId){
        try {
            const burgerToDelete = await dbContext.Burgers.findById(burgerId)
            
            if (!burgerToDelete) {
            return console.log('burger not found')
            }
            if (burgerToDelete) {
            const result = await dbContext.Burgers.deleteOne(burgerToDelete)
            return console.log('deleted burger')
                
            }
        } catch (error) {
            console.log(error)
        }
        
    }

}





export const burgersService = new BurgersService()