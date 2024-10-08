package com.petx.api.controller;

import com.nimbusds.jose.JOSEException;
import com.petx.api.dto.admin.AdminDTO;
import com.petx.api.dto.admin.RegistroPet;
import com.petx.api.dto.admin.UuidDTO;
import com.petx.facade.AdminFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminFacade adminFacade;

    @PostMapping("/pet/{qtd}")
    public ResponseEntity criarQRCode(@PathVariable int qtd) {
        adminFacade.criarQRCode(qtd);
        return ResponseEntity.ok("Quantidade de pets criados: " + qtd );
    }

    @GetMapping("/uuid-disponiveis")
    public ResponseEntity buscarPetsNaoCadastrados() {
        List<UuidDTO> listLinkQRCode = adminFacade.buscarPetsNaoCadastrados();
        return ResponseEntity.ok(listLinkQRCode);
    }

    @PutMapping("/qrcode/{uuidQRCodeGerado}")
    public ResponseEntity QRCodeGerado(@PathVariable UUID uuidQRCodeGerado){
        adminFacade.QRCodeGerado(uuidQRCodeGerado);
        return ResponseEntity.ok("QRCode gerado");
    }

    @GetMapping("/dados-pets")
    public ResponseEntity buscarRegistros(){
        RegistroPet registros = adminFacade.buscarRegistros();
        return ResponseEntity.ok(registros);
    }

    @PostMapping("/autenticar")
    public ResponseEntity autenticar(@RequestBody AdminDTO adminDTO) throws JOSEException {
        Map<String, Object> adminUsuario = adminFacade.autenticar(adminDTO);
        return ResponseEntity.ok(adminUsuario);
    }
}