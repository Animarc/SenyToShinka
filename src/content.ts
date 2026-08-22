export type Language = 'es' | 'ja'

type Content = {
  nav: string[]
  contact: string
  eyebrow: string
  hero: string
  heroAccent: string
  intro: string
  primaryCta: string
  secondaryCta: string
  metricLabels: string[]
  servicesKicker: string
  servicesTitle: string
  servicesIntro: string
  services: { number: string; title: string; body: string; tags: string[] }[]
  methodKicker: string
  methodTitle: string
  methodSteps: { title: string; body: string }[]
  japanKicker: string
  japanTitle: string
  japanBody: string
  japanPoints: string[]
  closingKicker: string
  closingTitle: string
  closingBody: string
  closingCta: string
  footer: string
}

export const copy: Record<Language, Content> = {
  es: {
    nav: ['Servicios', 'Método', 'Japón'],
    contact: 'Hablemos',
    eyebrow: 'Barcelona ↔ Japón · Ingeniería de sistemas',
    hero: 'Evolucionamos sistemas críticos',
    heroAccent: 'sin perder el control.',
    intro: 'Modernización legacy guiada por observabilidad. Hacemos visible cada dependencia, riesgo y coste antes de transformar lo que mantiene tu negocio en marcha.',
    primaryCta: 'Evaluar mi arquitectura',
    secondaryCta: 'Ver servicios',
    metricLabels: ['Visibilidad antes del cambio', 'Evolución sin big bang', 'Cobertura fuera de horario JP'],
    servicesKicker: 'Lo que resolvemos',
    servicesTitle: 'De la incertidumbre a una evolución medible.',
    servicesIntro: 'Entramos donde la complejidad, la deuda técnica y el riesgo operativo frenan la evolución.',
    services: [
      { number: '01', title: 'Renovación de servicios legacy', body: 'Trazamos dependencias y comportamiento real para diseñar una migración incremental, reversible y alineada con el negocio.', tags: ['Discovery', 'Strangler pattern', 'Cloud readiness'] },
      { number: '02', title: 'Auditorías de observabilidad', body: 'Evaluamos señales, cobertura, ruido, tiempos de respuesta y costes. Entregamos prioridades claras y un roadmap ejecutable.', tags: ['Metrics', 'Logs', 'Traces', 'FinOps'] },
      { number: '03', title: 'Arquitectura de observabilidad', body: 'Diseñamos plataformas, instrumentación y estándares que hacen la monitorización útil para ingeniería y negocio.', tags: ['OpenTelemetry', 'SLOs', 'Platform engineering'] },
      { number: '04', title: 'SRE fuera del horario japonés', body: 'Extendemos la capacidad de tu equipo mientras Japón descansa: respuesta operativa, mejora continua y handoff documentado.', tags: ['Follow-the-sun', 'Incident response', 'Runbooks'] },
    ],
    methodKicker: 'Seny × Shinka',
    methodTitle: 'Criterio para evolucionar.',
    methodSteps: [
      { title: 'Observar', body: 'Instrumentamos y obtenemos una imagen fiable del sistema real.' },
      { title: 'Decidir', body: 'Priorizamos por riesgo, impacto, calidad y coste.' },
      { title: 'Evolucionar', body: 'Ejecutamos cambios pequeños, verificables y reversibles.' },
      { title: 'Transferir', body: 'Dejamos conocimiento, estándares y autonomía en el equipo.' },
    ],
    japanKicker: 'Un puente operativo',
    japanTitle: 'Tu sistema no se detiene cuando termina la jornada.',
    japanBody: 'Trabajamos desde Europa como extensión del equipo japonés. Cuando vuestro día acaba, el nuestro empieza: investigamos, mejoramos y preparamos un relevo claro para la mañana siguiente.',
    japanPoints: ['Comunicación asíncrona y documentada', 'Ventana europea para mantenimiento y análisis', 'Inglés, español y japonés en cada punto de contacto'],
    closingKicker: 'El primer paso es ver con claridad',
    closingTitle: 'Hablemos del sistema que no podéis permitiros parar.',
    closingBody: 'Una primera conversación técnica, sin presentaciones genéricas. Revisamos el contexto y definimos dónde la observabilidad puede reducir riesgo, tiempo y coste.',
    closingCta: 'Solicitar una conversación',
    footer: 'Ingeniería con seny. Evolución con propósito.',
  },
  ja: {
    nav: ['サービス', 'アプローチ', '日本向け支援'],
    contact: 'お問い合わせ',
    eyebrow: 'バルセロナ ↔ 日本 · システムエンジニアリング',
    hero: '止められないシステムを、',
    heroAccent: '見失わずに進化させる。',
    intro: 'オブザーバビリティを起点としたレガシーモダナイゼーション。事業を支えるシステムを変える前に、依存関係・リスク・コストを可視化します。',
    primaryCta: 'アーキテクチャを相談する',
    secondaryCta: 'サービスを見る',
    metricLabels: ['変更前に可視化', 'ビッグバンに頼らない進化', '日本の営業時間外をカバー'],
    servicesKicker: '解決する課題',
    servicesTitle: '不確実性を、測定可能な進化へ。',
    servicesIntro: '複雑性、技術的負債、運用リスクが変革を妨げている領域に、実践的な支援を提供します。',
    services: [
      { number: '01', title: 'レガシーサービスの刷新', body: '依存関係と実際の挙動を把握し、段階的でロールバック可能な移行を設計します。', tags: ['ディスカバリー', '段階的移行', 'クラウド対応'] },
      { number: '02', title: 'オブザーバビリティ監査', body: 'シグナル、カバレッジ、ノイズ、対応時間、コストを評価し、実行可能なロードマップを提示します。', tags: ['メトリクス', 'ログ', 'トレース', 'FinOps'] },
      { number: '03', title: 'オブザーバビリティ設計', body: 'エンジニアリングとビジネスの双方に役立つ基盤、計装、標準を設計します。', tags: ['OpenTelemetry', 'SLO', 'プラットフォーム'] },
      { number: '04', title: '日本の営業時間外SRE', body: '日本のチームが休んでいる時間帯に、運用対応、継続改善、明確な引き継ぎを行います。', tags: ['Follow-the-sun', 'インシデント対応', 'Runbook'] },
    ],
    methodKicker: 'Seny × Shinka',
    methodTitle: '判断力をもって、進化する。',
    methodSteps: [
      { title: '観測', body: '計装を整え、実システムの信頼できる全体像を得ます。' },
      { title: '判断', body: 'リスク、効果、品質、コストに基づいて優先順位を決めます。' },
      { title: '進化', body: '小さく、検証可能で、元に戻せる変更を実行します。' },
      { title: '移管', body: '知識、標準、自走できる力をチームに残します。' },
    ],
    japanKicker: '運用をつなぐ架け橋',
    japanTitle: '業務時間が終わっても、システムは止まりません。',
    japanBody: '欧州から日本チームの延長として活動します。日本の一日が終わる頃、私たちの一日が始まります。調査と改善を進め、翌朝に明確な引き継ぎを届けます。',
    japanPoints: ['非同期かつ文書化されたコミュニケーション', '保守・分析に活用できる欧州時間帯', '英語・スペイン語・日本語での連携'],
    closingKicker: '最初の一歩は、正しく見ること',
    closingTitle: '止められないシステムについて、お聞かせください。',
    closingBody: '一般的な営業資料ではなく、技術的な対話から始めます。状況を理解し、オブザーバビリティでリスク、時間、コストを減らせる領域を明確にします。',
    closingCta: '相談を申し込む',
    footer: 'Senyの判断力。目的ある進化。',
  },
}
