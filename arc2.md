```mermaid
flowchart TB
    %% Main application flow
    subgraph CL["Client Layer"]
        direction LR
        Web["Web Application"]
        Mobile["Mobile Application"]
    end
    
    subgraph AL["API Layer"]
        direction LR
        AG["API Gateway"]
        GQL["GraphQL API"]
    end
    
    subgraph CS["Core Services"]
        direction TB
        subgraph UserRelated["User-Related Services"]
            US["User Service"]
            GamS["Gamification Service"]
        end
        subgraph ContentRelated["Content-Related Services"]
            CS["Content Service"]
            RRS["Reviews and Ratings Service"]
        end
        subgraph TravelRelated["Travel-Related Services"]
            IS["Itinerary Service"]
            RS["Reservation Service"]
            SS["Search Service"]
            RecS["Recommendation Service"]
            GS["Geolocation Service"]
        end
        subgraph SupportServices["Support Services"]
            NS["Notification Service"]
            MS["Messaging Service"]
            AS["Analytics Service"]
            PS["Payment Service"]
        end
        IntS["Integration Service"]
    end
    
    subgraph DS["Data Stores"]
        PG[(PostgreSQL)]
        Redis[(Redis Cache)]
        ES[(Elasticsearch)]
    end
    
    subgraph DP["Data Processing"]
        DPS["Data Processing Service"]
    end
    
    subgraph MQ["Message Queue"]
        Kafka["Apache Kafka"]
    end
    
    subgraph SDC["Service Discovery & Config"]
        Eureka["Netflix Eureka"]
        Config["Spring Cloud Config"]
    end
    
    subgraph EX["External Services"]
        TP["Third-party APIs"]
    end
    
    subgraph ML["Monitoring & Logging"]
        Prometheus["Prometheus"]
        Grafana["Grafana"]
        ELK["ELK Stack"]
        Sentry["Sentry"]
    end
    
    subgraph SEC["Security"]
        Keycloak["Keycloak"]
        Vault["HashiCorp Vault"]
    end
    
    subgraph SM["Service Mesh"]
        Istio["Istio"]
    end
    
    %% Connections
    CL --> AL
    AL --> CS
    CS <--> DS
    CS <--> MQ
    DP <--> MQ
    DP <--> DS
    IntS <--> EX
    SDC --> CS
    ML --> CS
    SEC --> CS
    SM --> CS
    
    %% Styling
    classDef client fill:#f06292,color:#fff,stroke:#ad1457,stroke-width:2px
    classDef api fill:#4fc3f7,color:#fff,stroke:#0288d1,stroke-width:2px
    classDef core fill:#81c784,color:#fff,stroke:#388e3c,stroke-width:2px
    classDef data fill:#fff176,color:#000,stroke:#fbc02d,stroke-width:2px
    classDef queue fill:#ff8a65,color:#fff,stroke:#d84315,stroke-width:2px
    classDef config fill:#9575cd,color:#fff,stroke:#512da8,stroke-width:2px
    classDef external fill:#a1887f,color:#fff,stroke:#6d4c41,stroke-width:2px
    classDef monitoring fill:#4db6ac,color:#fff,stroke:#00796b,stroke-width:2px
    classDef security fill:#f44336,color:#fff,stroke:#c62828,stroke-width:2px
    classDef mesh fill:#90a4ae,color:#fff,stroke:#546e7a,stroke-width:2px
    
    class Web,Mobile client
    class AG,GQL api
    class US,GamS,CS,RRS,IS,RS,SS,RecS,GS,NS,MS,AS,PS,IntS core
    class PG,Redis,ES data
    class Kafka queue
    class DPS core
    class Eureka,Config config
    class TP external
    class Prometheus,Grafana,ELK,Sentry monitoring
    class Keycloak,Vault security
    class Istio mesh
```
