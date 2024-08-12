package com.petx.api.controller;

import com.petx.api.dto.pet.QRCodeDTO;
import com.petx.api.exceptions.PetNotCadastro;
import com.petx.facade.QRCodeFacade;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/qrcode")
public class QRCodeController {

    @Autowired
    private QRCodeFacade facade;

    @Tag(name = "Public API")
    @GetMapping("/{uuid}")
    public ResponseEntity<Object> buscarQRCode(@PathVariable UUID uuid) throws PetNotCadastro {
        QRCodeDTO QRCodeDTO = facade.buscarQRCode(uuid);
        return ResponseEntity.ok(QRCodeDTO);
    }

    @PostMapping("/validar/{uuid}")
    public ResponseEntity<String> validarQRCode(@PathVariable UUID uuid) throws PetNotCadastro {
        facade.validarQRCode(uuid);
        return ResponseEntity.ok("QRCode validado!");
    }
}