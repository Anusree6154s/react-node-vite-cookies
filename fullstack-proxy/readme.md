# Fullstack with proxy only (only for dev, not for prod)

- proxy is set inside `client/vite.config.ts`
- can only be used for development, not for production 
- neither vercel.json can be used in client to redirect api calls to backend like proxy (because all vercel redirects does is redirect routes to exist file paths within client)

## To test
- clone the project in local machine
- run `cd fullstack-proxy && npm run dev`
- visit the url appearing