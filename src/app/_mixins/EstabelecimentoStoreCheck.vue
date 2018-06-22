<script>
import { isObjEmpty } from '../../utils/helpers/utils'

export default {
  computed: {
    isCurrentEstabelecimentoVazio () {
      return isObjEmpty(this.$store.getters.currentEstabelecimento)
    }
  }
}
</script>
