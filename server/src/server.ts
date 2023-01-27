import Fastify from "fastify";
import { FastifyInstance } from "fastify"
import Cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { z } from "zod";
const app = Fastify();
app.register(Cors/* , {
    origin: ['http//localhost:3000']
} */);
app.get('/hello',async()=>{
    const user = await prisma.user.findMany({
        where:{
            name:{
                startsWith:'Lucas'
            }
        }
    })
    return user
})
app.post('/teste',async(resq)=>{
    console.log('chamou!!!!')
    const   createUser = z.object({
        name: z.string(),
        last: z.string(),
        phone: z.string()
    })
    const {name,last,phone} = createUser.parse(resq.body)
    await prisma.teste.create({
        data:{
            name,
            last,
            phone,
        }
    })
    
})

app.post('/service',async()=>{

})

app.listen({
    port:3333,
}).then(()=>{
    console.log('http server running port localhost:3333')
})


