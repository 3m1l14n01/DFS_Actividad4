
const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));


//    "token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTc4MTE5OWYxNWIwOTg3OTMyNTM4YiIsImlhdCI6MTc3MTUzNjg0MSwiZXhwIjoxNzcxNTQwNDQxfQ.81go2xZgfkQ66kbXmWgWa__643mk7Sg2pN5-kEqFu88

// nuevo usuario: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTdhMDVlOTllMmNjZjhmYzJmMzVmYSIsImlhdCI6MTc3MTU0NDcwMiwiZXhwIjoxNzcxNTQ4MzAyfQ.DPUuaThTE4qcGtoWM1zLkRHa9wCuDPD0ycqc2a1RH60"

// id de producto: 6997a0ef8444cbb6abc182fe