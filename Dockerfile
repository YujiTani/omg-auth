FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lock tsconfig.json ./
COPY src ./src
COPY favicon.ico ./favicon.ico

RUN ls -la

RUN bun install --no-cache && \
    bun run build

USER bun

EXPOSE 3000

CMD ["bun", "dev"]
