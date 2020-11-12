package soft.develop;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;

import java.util.HashMap;
import java.util.Map;

/**
 * 简单的JSONMap
 */
public class MessageBuilder {

    private Map<String, Object> values;

    public MessageBuilder() {
        this.values = new HashMap<>();

    }

    public static MessageBuilder create(){
        return new MessageBuilder();
    }

    public MessageBuilder add(String key, Object value) {

        this.values.put(key, value);

        return this;
    }

    public Map<String, Object> getValues() {

        return this.values;

    }

    public MessageBuilder clear() {
        if (this.values != null) {
            this.values.clear();
        }
        return this;
    }

    public String toJSONString() {
        if (this.values == null) {
            return "{}";
        }
        return JSON.toJSONString(this.values, SerializerFeature.WriteDateUseDateFormat);
    }
}
