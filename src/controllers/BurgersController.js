import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController{
    constructor(){
    super('api/burgers')
    this.router
        .get('', this.getBurgers)
        .post('', this.createBurger)
        .delete('/:burgerId', this.deleteBurger)
    }


    async getBurgers(request, response, next){
    try {
        response.send('Yum, burgers controller is working!')
        const burgers = await burgersService.getBurgers()
        response.send(burgers)
    } catch (error) {
        next(error)
    }
    }

    async createBurger(request, response, next){
        try {
        const burgerData = request.body
        const burger = await burgersService.createBurger(burgerData)
        response.send(burger)
        } catch (error) {
        next(error)
        }
        
    }


    async deleteBurger(request, response, next){
        try {
        const burgerId = request.params.burgerId
        const burger = await burgersService.deleteBurger(burgerId)
        response.send(burgerId)
        } catch (error) {
        next(error)
        }
        
        

    }

    
}