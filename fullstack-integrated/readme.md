# Integrating client and backend without proxy

- serving client via backend using express.static()
- works in production, but have to build client everytime we make changes to client 
- deploy only server

## To test
- visit https://fullstack-integrated.vercel.app/
- for each step of login, checkauth and logout, observe the cookies being set and cleared in inspect mode
