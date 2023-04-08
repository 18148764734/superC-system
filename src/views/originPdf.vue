<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import { getmark } from "../util/watermark";
const { watermark } = getmark();
    onMounted(() => {
      watermark("你的名字");//水印名
    });

    onUnmounted(() => {
    });
</script>