import burgershack from "../..";
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
                burgerToDelete.deleteOne(burgerId)
                return console.log('deleted burger')
                
            }
        } catch (error) {
            error(error)
        }
        
    }

}





export const burgersService = new BurgersService()