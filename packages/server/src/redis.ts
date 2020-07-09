import Redis from "ioredis";

export const redis =
  process.env.NODE_ENV === "production"
    ? new Redis({
        host: "ec2-35-172-243-170.compute-1.amazonaws.com",
        port: 21359,
        password:
          "pe3988133f77976a3d4263a6348b3dc5acaffbeb7d29b65c495cf7ce132f8dadf",
      })
    : new Redis();
