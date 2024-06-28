# Animalia 2

Animalia API for listing various animals.

## REST API Specification

- Production: <https://animalia.anandamarwan.com>
- Local: <http://localhost:3000>

| Endpoint       | HTTP     | Description             |
| -------------- | -------- | ----------------------- |
| `/animals`     | `GET`    | Get all animals         |
| `/animals/:id` | `GET`    | Get one animal by id    |
| `/animals`     | `POST`   | Add new animal          |
| `/animals`     | `DELETE` | Delete all animals      |
| `/animals/:id` | `DELETE` | Delete one animal by id |
| `/animals/:id` | `PUT`    | Update one animal by id |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

```sh
bun dev
```

Open <http://localhost:3000>
