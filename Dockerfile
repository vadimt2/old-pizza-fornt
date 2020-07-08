FROM node:6.11.0 as builder
COPY package.json ./
RUN yarn install && mkdir /ClientPizzaProj && mv ./node_modules ./ClientPizzaProj
WORKDIR /ClientPizzaProj
COPY . .
RUN yarn run build --prod --build-optimizer
FROM nginx:1.18
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
                                  
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ClientPizzaProj/dist /usr/share/nginx/html
COPY --from=builder /ClientPizzaProj/entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]