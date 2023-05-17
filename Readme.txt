Deploy application to Kubernetes 
Using kongHQ 
1. kubectl apply -f workloads.yaml  
2. Kubcectl apply -f services.yaml
3. You dont need to use ingress.yaml(It's used for Ingress-nginx)
4. Install and Launch Kong gateway as Dataplane 
5. Config Path to expose service via loadbalancer at konghq
