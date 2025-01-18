
### Starting Zookeeper Container

To start a Zookeeper container and expose port `2181`, run the following command:

```bash
docker run -p 2181:2181 zookeeper
```

---

### Starting Kafka Container

To start a Kafka container, expose port `9092`, and set up the required environment variables, use the following command:

```bash
docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=<IP>:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP>:9092 \
  -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka
```

**Note:** Replace `<IP>` with the actual IP address of your Zookeeper server.

---
