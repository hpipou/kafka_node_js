# kafka_node_js

## IMPORTANT

### Installation de kafka sur windows :

```bash
  Téléchargez kafka : https://kafka.apache.org/downloads
```

```bash
  Dézipez le fichier, renommez le fichier en kafka.tar et dézipez ce dernier dans : c:/kafka/
```

```bash
  Modifiez les deux fichiers suivants avec notepad++: 
  ./config/server.properties  (log.dirs=c:/kafka/kafka-logs)
  ./config/zookeeper.properties (dataDir=c:/kafka/zookeeper-data)
```

### Lancement de Kafka
-> Lancez zookeeper :
```bash
  .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
```
-> Lancez kafka :
```bash
  .\bin\windows\kafka-server-start.bat .\config\server.properties
```
-> Créer une topic :
```bash
  .\bin\windows\kafka-topics.bat --create --bootstrap-server localhost:9092 --replication-factor 1 --topic testo
```
-> Ajouter une partition :
```bash
  .\bin\windows\kafka-topics.bat --alter --bootstrap-server localhost:9092 --topic testo --partitions 2
```
@LAMINE
