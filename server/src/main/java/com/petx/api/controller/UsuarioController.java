package com.petx.api.controller;

import com.nimbusds.jose.JOSEException;
import com.petx.api.dto.Usuario.*;
import com.petx.facade.UsuarioFacade;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@SuppressWarnings("ALL")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioFacade facade;

    @Tag(name = "Public API")
    @PostMapping
    public ResponseEntity<Object> cadastrar(@RequestBody @Valid UsuarioDTO usuarioDTO) throws JOSEException {
        UsuarioLogadoDTO usuarioLogado = facade.cadastrar(usuarioDTO);
        return ResponseEntity.ok(usuarioLogado);
    }

    @Tag(name = "Public API")
    @PostMapping("/cadastrar/gmail")
    public ResponseEntity<Object> cadastrarGoogle(@RequestBody String tokenGoogle) throws JOSEException {
        UsuarioLogadoDTO usuarioLogado = facade.cadastrarGoogle(tokenGoogle);
        return ResponseEntity.ok(usuarioLogado);
    }

    @GetMapping
    public ResponseEntity<Object> buscar(@RequestHeader("Authorization") String token) {
        UsuarioDTO usuarioDTO = facade.buscar(token);
        return ResponseEntity.ok(usuarioDTO);
    }

    @PutMapping
    public ResponseEntity atualizar(@RequestHeader("Authorization") String token, @RequestBody @Valid UsuarioAtualizarDTO usuarioAtualizarDTO) {
        facade.atualizar(usuarioAtualizarDTO, token);
        return ResponseEntity.ok("Dados atualizados!");
    }

    @PutMapping("/atualizaSenha")
    public ResponseEntity atualizarSenha(@RequestHeader("Authorization") String token, @RequestBody @Valid TrocarSenhaDTO trocarSenhaDTO) {
        facade.atualizarSenha(trocarSenhaDTO, token);
        return ResponseEntity.ok("Nova Senha Atualizada!");
    }

    @DeleteMapping
    public ResponseEntity<String> deletar(@RequestHeader("Authorization") String token) {
        facade.deletar(token);
        return ResponseEntity.ok("Usuario deletado!");
    }

    @Tag(name = "Public API")
    @PostMapping("/autenticar")
    public ResponseEntity<Object> autenticar(@RequestBody @Valid LoginUsuarioDTO loginUsuarioDTO) throws JOSEException {
        UsuarioLogadoDTO usuarioLogado = facade.autenticar(loginUsuarioDTO);
        return ResponseEntity.ok(usuarioLogado);
    }

    @Tag(name = "Public API")
    @PostMapping("/validar/email")
    public ResponseEntity<Object> validarEmail(@RequestBody @Valid EmailDTO emailDTO) {
        facade.validarEmail(emailDTO);
        return ResponseEntity.ok("Email enviado!");
    }

    @PostMapping("/confirmar/email")
    public ResponseEntity<Object> confirmarEmail(@RequestBody @Valid CodigoValidacaoEmailDTO codigoValidacaoEmailDTO){
        facade.confirmarEmail(codigoValidacaoEmailDTO);
        return ResponseEntity.ok("Email validado");
    }

    @Tag(name = "Public API")
    @PostMapping("/validar/esquecer-senha")
    public ResponseEntity<Object> esqueceuSenha(@RequestBody @Valid EmailDTO emailDTO) {
        facade.esqueceuSenha(emailDTO);
        return ResponseEntity.ok("Email enviado!");
    }

    @Tag(name = "Public API")
    @PostMapping("/validar/link/{codigoValidacao}")
    public ResponseEntity<Object> validarLink(@PathVariable UUID codigoValidacao ) {
        facade.validarLink(codigoValidacao);
        return ResponseEntity.ok("link valido");
    }

    @Tag(name = "Public API")
    @PutMapping("/validar/troca-senha/{codigoValidacao}")
    public ResponseEntity<Object> trocarSenha(@RequestBody @Valid TrocarSenhaDTO trocarSenhaDTO, @PathVariable UUID codigoValidacao ) {
        facade.trocarSenha(trocarSenhaDTO, codigoValidacao);
        return ResponseEntity.ok("Senha atualizada!");
    }
}