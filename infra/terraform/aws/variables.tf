variable "region" {
  type    = string
  default = "us-east-1"
}

variable "key_name" {
  description = "Nome do Key Pair existente na AWS"
  type        = string
}
