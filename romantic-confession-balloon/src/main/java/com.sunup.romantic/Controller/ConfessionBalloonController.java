package com.sunup.romantic.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author lime
 */
@Controller
@Slf4j
public class ConfessionBalloonController {
    @GetMapping(value = {"/", "confessionBalloon"})
    public String confessionBalloon() {
        return "confessionBalloon";
    }

}
