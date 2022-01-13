package com.example.demoangulartfronttest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/hi")
    public Mono<Map<String, String>> hi() {
        return Mono.just(Collections.singletonMap("msg","hi i am from spring boot."))
                .delayElement(Duration.ofSeconds(2));
    }
}
