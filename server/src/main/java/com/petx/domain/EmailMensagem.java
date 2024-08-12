package com.petx.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmailMensagem {

    private String titulo;

    private String mensagem;

    private String destinatario;
}
