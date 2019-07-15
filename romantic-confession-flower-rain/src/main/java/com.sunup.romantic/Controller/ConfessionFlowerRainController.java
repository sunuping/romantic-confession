package com.sunup.romantic.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author lime
 */
@Controller
@Slf4j
public class ConfessionFlowerRainController {

    @GetMapping(value = {"/", "confessionFlowerRain"})
    public String confessionFlowerRain() {
        return "confessionFlowerRain";
    }


}
